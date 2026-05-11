import psycopg2
import json
import os

def exportar_geojson():
    print("Conectando a PostgreSQL...")
    try:
        # 1. Conexión a tu base de datos (las mismas credenciales de tu Flask)
        conn = psycopg2.connect(
            database="servicio",
            user="postgres",
            password="postgres", # Cambia esto si tu contraseña es distinta
            host="localhost",
            port="5432"
        )
        cur = conn.cursor()

        # 2. La consulta SQL mágica que convierte la tabla en GeoJSON
        query = """
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
        FROM carencia_por_acceso_a_la_alimentacion t;
        """

        print("Extrayendo y transformando geometrías...")
        cur.execute(query)
        resultado = cur.fetchone()[0]

        # 3. Preparar el texto para el archivo .js
        # Dependiendo de tu versión de psycopg2, puede venir como texto o como diccionario
        if isinstance(resultado, str):
            contenido_js = f"const datosAlimentacion = {resultado};"
        else:
            contenido_js = f"const datosAlimentacion = {json.dumps(resultado, ensure_ascii=False)};"

        # 4. Asegurarnos de que exista la carpeta geojson
        if not os.path.exists('geojson'):
            os.makedirs('geojson')

        # 5. Escribir el archivo
        ruta_archivo = "geojson/alimentacion.js"
        with open(ruta_archivo, "w", encoding="utf-8") as f:
            f.write(contenido_js)

        print(f"✅ ¡Éxito! Tu archivo ha sido creado correctamente en: {ruta_archivo}")

        cur.close()
        conn.close()

    except Exception as e:
        print(f"❌ Ocurrió un error: {e}")

if __name__ == "__main__":
    exportar_geojson()