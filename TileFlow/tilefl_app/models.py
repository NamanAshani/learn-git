# tileflow_app/models.py - MINIMAL VERSION
from django.db import models
 
# Simple User model
class User(models.Model):
    employee_id = models.CharField(max_length=20, blank=True)
    work_role = models.CharField(max_length=50, default='employee')
    
    def __str__(self):
        return self.employee_id