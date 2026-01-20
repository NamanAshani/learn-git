from django.shortcuts import render,redirect

def home(request):
    return render(request,'index.html')


# def register(request):
#     return render(request,'Reg.html')