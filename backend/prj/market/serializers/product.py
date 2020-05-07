from rest_framework import serializers
from market.models import Product

from market.serializers.category import CategorySerializer
from market.serializers.subcategory import SubCategorySerializer

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    subcategory = SubCategorySerializer()
    class Meta:
        model = Product
        fields = ['id', 'name', 'category', 'subcategory', 'get_small_image_url'] 


