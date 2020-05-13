from rest_framework import serializers


class InitSerializer(serializers.Serializer):
    token = serializers.CharField()
    
