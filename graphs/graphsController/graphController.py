import json
from rest_framework.decorators import api_view
from django.http import HttpResponse
from django.core.serializers.json import DjangoJSONEncoder
from graphs.graphsService.graphService import graphsdata


@api_view(['GET'])
def get_pop_data(request):

    graphs_data = graphsdata()

    result = graphs_data.getgraphval()

    dataobj = {'data': result}

    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)