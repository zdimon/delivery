from djangochannelsrestframework.consumers import view_as_consumer
from django.urls import re_path
from .consumers.category import CategoryListConsumer
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

from drf_yasg.utils import swagger_auto_schema

decorated_category_view = \
   swagger_auto_schema(
      method='post'
   )(view_as_consumer(CategoryListConsumer))


application = ProtocolTypeRouter({
    "websocket": AuthMiddlewareStack(
        URLRouter([
            re_path(r"market/$", decorated_category_view),
        ])
    ),
 })