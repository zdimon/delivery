from rest_framework import serializers
from rest_framework import viewsets, mixins
from rest_framework import permissions
from rest_framework.decorators import action

from market.models import Category, SubCategory


        
class SubCategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SubCategory
        fields = ['id', 'name']

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    subcategory = serializers.SerializerMethodField()

    def get_subcategory(self,obj):
        out = []
        for item in SubCategory.objects.filter(category=obj):
            out.append(SubCategorySerializer(item).data)
        return out

    class Meta:
        model = Category
        fields = ['id', 'name', 'image_url', 'subcategory']



from rest_framework.generics import ListAPIView

class CategoryListView(ListAPIView):
    serializer_class = CategorySerializer
    pagination_class = None

    def get_queryset(self):
        return Category.objects.all().order_by('-id')





class CategoryViewSet(viewsets.ModelViewSet):
    """
        API endpoint that allows users to read and modify categories.
    """   
    queryset = Category.objects.all().order_by('-id')
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]  
    http_method_names = ['get', 'post']

    @action(detail=False, methods=['get'])
    def set_password(self, request):
        pass