#2. SQLAlchemy 적용
from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

import config

db = SQLAlchemy()
migrate = Migrate()
# 전역변수로 만든 db migrate


def create_app():
    app = Flask(__name__)
    app.config.from_object(config)
    # config.py 파일에 작성한 항목을 app.config 환경 변수로 부르기 위해 app.config.from_object(config) 코드를 추가

    # ORM
    db.init_app(app)
    migrate.init_app(app, db)
    from . import models

    # 블루프린트
    from .views import main_views, question_views, answer_views
    app.register_blueprint(main_views.bp)
    app.register_blueprint(question_views.bp)
    app.register_blueprint(answer_views.bp)

    return app

# 1. blueprint 적용
# from flask import Flask
#
# def create_app():
#     app = Flask(__name__)
#
#     from .views import main_views
#     app.register_blueprint(main_views.bp)
#
#     return app

# 0. app 사용
# from flask import Flask
#
# def create_app():
#     app = Flask(__name__)
#
#     @app.route('/')
#     def hello_pybo():
#         return 'Hello, My First Pybo!'
#
#     return app