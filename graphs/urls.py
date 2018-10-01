from django.conf.urls import url
from graphs import views
from graphs.graphsController import graphController


urlpatterns = [
    url(r'^$', views.dashboardView.as_view()),
    # url(r'^api/fetchgraphsvals/$', graphsController.popGraphData),
    url(r'^api/getgraphdata/$', graphController.get_pop_data),
]
