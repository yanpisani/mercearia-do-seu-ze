# Generated by Django 3.2.5 on 2021-11-02 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('name', models.CharField(max_length=255)),
                ('permission_level', models.PositiveSmallIntegerField(default=0)),
                ('role', models.CharField(blank=True, max_length=255, null=True)),
                ('role_description', models.TextField(blank=True, null=True)),
                ('phone', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('cpf', models.CharField(max_length=255)),
                ('birth_date', models.DateField()),
                ('address', models.CharField(max_length=255)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
