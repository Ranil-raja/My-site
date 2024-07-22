from django.db import models
import datetime
import os

def getFileName(request,filename):
    now_time=datetime.datetime.now().strftime("%Y%m%d%H:%M:%S")
    new_filename="%s%s"%(now_time,filename)
    return os.path.join('uploads/',new_filename)

class Category(models.Model):
    title=models.CharField(unique=True,max_length=100,null=False,blank=False)
    status=models.BooleanField(default=False,help_text="0-show,1-hide")
    def __str__(self):
        return self.title

class Content(models.Model):
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    image=models.ImageField(upload_to=getFileName,null=True,blank=True)