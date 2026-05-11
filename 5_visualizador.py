from flask import Flask, jsonify
import psycopg2
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Función para conectar a la base de datos
def conectar_db():
    return psycopg2.connect(
        database="servicio",
        user="postgres",
        password="postgres",
        host="localhost",
        port="5432"
    )

# Función general para traer las capas de municipios
def obtener_capa(tabla):
    conn = conectar_db()
    cur = conn.cursor()

    query = f"""
    SELECT json_build_object(
        'type','FeatureCollection',
        'features', json_agg(
            json_build_object(
                'type','Feature',
                'geometry', ST_AsGeoJSON(ST_Transform(geom, 4326))::json,
                'properties', to_jsonb(t) - 'geom'
            )
        )
    )
    FROM {tabla} t;
    """
    cur.execute(query)
    geojson = cur.fetchone()[0]
    cur.close()
    conn.close()
    return geojson

# ==========================================
# NUEVA RUTA: CONTORNO DEL ESTADO (ST_Union)
# ==========================================
@app.route("/api/contorno_estado")
def contorno():
    try:
        conn = conectar_db()
        cur = conn.cursor()

        # Usamos WITH para hacer la unión primero y el JSON después
        query = """
        WITH geometria_unida AS (
            SELECT ST_Union(geom) as geom_union 
            FROM rezago_educativo
        )
        SELECT json_build_object(
            'type', 'FeatureCollection',
            'features', json_build_array(
                json_build_object(
                    'type', 'Feature',
                    'geometry', ST_AsGeoJSON(ST_Transform(geom_union, 4326))::json,
                    'properties', json_build_object('nombre', 'Estado de México')
                )
            )
        )
        FROM geometria_unida;
        """

        cur.execute(query)
        geojson = cur.fetchone()[0]
        cur.close()
        conn.close()
        
        return jsonify(geojson)
    except Exception as e:
        print(f"Error en contorno: {e}")
        return jsonify({"error": str(e)}), 500

# ==========================================
# RUTAS DE LAS CAPAS DE CARENCIAS
# ==========================================

@app.route("/api/rezago_educativo")
def rezago():
    return jsonify(obtener_capa("rezago_educativo"))

@app.route("/api/carencia_salud")
def salud():
    return jsonify(obtener_capa("carencia_por_acceso_a_los_servicios_de_salud"))

@app.route("/api/carencia_alimentacion")
def alimentacion():
    return jsonify(obtener_capa("carencia_por_acceso_a_la_alimentacion"))

@app.route("/api/carencia_vivienda")
def vivienda():
    return jsonify(obtener_capa("carencia_vivienda"))

@app.route("/api/servicios_basicos")
def servicios():
    return jsonify(obtener_capa("carencia_acceso_servicios_basicos_en_la_vivienda"))

@app.route("/api/pobreza")
def pobreza():
    return jsonify(obtener_capa("pobreza"))


if __name__ == "__main__":
    # Importante: debug=True ayuda a ver errores en la terminal
    app.run(debug=True)