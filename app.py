"""Servidor mínimo con Flask para la página fan de Dragon Ball Z.

Uso:
    python -m venv venv
    source venv/bin/activate        # En Windows: venv\\Scripts\\activate
    pip install -r requirements.txt
    python app.py
"""

import os

from flask import Flask, render_template

app = Flask(__name__, static_folder="static", static_url_path="/static")


@app.route("/")
def inicio():
    return render_template("index.html")


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    # host 0.0.0.0 para que se pueda ver desde fuera del servidor
    app.run(host="0.0.0.0", port=port, debug=True)
