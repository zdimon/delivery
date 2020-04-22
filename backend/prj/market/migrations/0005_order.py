# Generated by Django 3.0.5 on 2020-04-22 11:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0004_store'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('status', models.CharField(choices=[('new', 'new order'), ('pending', 'pending order'), ('finished', 'finished order')], default='new', max_length=10)),
                ('consumer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='market.Consumer')),
            ],
        ),
    ]
