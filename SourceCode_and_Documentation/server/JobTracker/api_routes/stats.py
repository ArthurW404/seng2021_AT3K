"""
Routes for fetching job postings
"""
from flask import (
    Blueprint,
    render_template,
    request,
    jsonify
)
from JobTracker.utils.colourisation import printColoured
from flask_restx import Resource, Api, Namespace

stats_router = Blueprint("stats", __name__)
stats_api = Api(
    stats_router, 
    doc="/doc",
    title="Job Statistics",
    description="Routes for fetching job statistics",
    default="/api/stats",
    default_label="Job statistics",
)

# Data model definitions


# RESTful route handlers:
@stats_api.route('/')
class Stats(Resource):
    def get(self):
        return {
            "stats": []
        }   
