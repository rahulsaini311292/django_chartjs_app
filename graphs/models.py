# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import uuid
from django.db import models

# Create your models here.
class citypopulation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    total_count = models.IntegerField()
    year = models.IntegerField()

    class Meta:
        db_table = "city_population"

