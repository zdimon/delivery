from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from django.contrib.auth.models import User

from drf_yasg.utils import swagger_auto_schema
from market.serializers.google_auth import GoogleAuthRequestSerializer
from rest_framework.authtoken.models import Token

class GoogleView(APIView):
    '''
    Авторизация через гугл.

    '''
    permission_classes = (AllowAny,)
    
    @swagger_auto_schema( 
        request_body = GoogleAuthRequestSerializer \
        )
    def post(self, request, format=None):
        print(request.data)
        try:
            user = User.objects.get(username=request.data['email'])
            token = Token.objects.get(user=user)
        except:
            user = User()
            user.username = request.data['email']
            user.is_active = True
            user.set_password('123')
            user.save()
            token = Token.objects.create(user=user)


        return Response({
            'token': token.key,
            'agent': request.META['HTTP_USER_AGENT'],
            'user': '{....}'
        })