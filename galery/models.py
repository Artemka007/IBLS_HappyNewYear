from django.db import models

class Pik(models.Model):
    author = models.CharField(max_length=256)
    src = models.ImageField(upload_to="pictures")

    def get_author(self):
        return self.author[:30]
