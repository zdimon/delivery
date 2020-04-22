from djangochannelsrestframework.mixins import (
    ListModelMixin,
    PatchModelMixin,
    UpdateModelMixin,
    CreateModelMixin,
    DeleteModelMixin,
)
from djangochannelsrestframework import permissions

from rest_framework import serializers

from market.models import Category

from drf_yasg.utils import swagger_auto_schema

from django.utils.decorators import method_decorator
from djangochannelsrestframework.generics import GenericAsyncAPIConsumer


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=250)


@method_decorator(name='list', decorator=swagger_auto_schema(
    operation_description="description from swagger_auto_schema via method_decorator"
))
class CategoryListConsumer(ListModelMixin, GenericAsyncAPIConsumer):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (permissions.AllowAny,)