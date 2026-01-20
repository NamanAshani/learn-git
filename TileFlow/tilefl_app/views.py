# tileflow_app/views.py
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
 

def home(request):
    return render(request,'index.html')

def login_view(request):
    """Simple login view - redirects to index.html after login"""
    if request.method == 'POST':
        # Get username and password from form
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        # Authenticate user
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            # Login successful
            login(request, user)
            return redirect('home')  # Go to dashboard (index.html)
        else:
            # Login failed
            messages.error(request, 'Invalid username or password')
    
    # Render login page
    return render(request, 'Registration/login.html')

def logout_view(request):
    """Simple logout view"""
    logout(request)
    return redirect('login')  # Go back to login page

def index_view(request):
    """Dashboard view - shows index.html"""
    return render(request, 'index.html')
def registration(request):
    return render(request,'Register.html')

def verify(request):
    context = {
        "error": None,
        "success": None
    }

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)

        if user and user.is_superuser:
            request.session["admin_verified"] = True
            return redirect("/Reg.html/")   # 👈 URL name for Reg.html page

        else:
            context["error"] = "Invalid admin username or password"
            return redirect("home")

    return redirect("home")

def register(request):
    # if not request.session.get("admin_verified"):
    #     return redirect("home")
    return render(request,'/Reg.html/')