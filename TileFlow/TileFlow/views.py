from django.shortcuts import render,redirect

def home(request):
    return render(request,'index.html')


def register(request):
    # if not request.session.get("admin_verified"):
    #     return redirect("home")
    return render(request,'Reg.html')