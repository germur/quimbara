import os
import re

divisions = [
    {
        "slug": "peso-semipesado",
        "name": "Light Heavyweight",
        "esName": "Peso Semipesado",
        "champion": "ALEX PEREIRA",
        "tags": "['peso-semipesado', 'light-heavyweight', 'alex-pereira', 'jiri-prochazka']"
    },
    {
        "slug": "peso-mediano",
        "name": "Middleweight",
        "esName": "Peso Mediano",
        "champion": "DRICUS DU PLESSIS",
        "tags": "['peso-mediano', 'middleweight', 'dricus-du-plessis', 'sean-strickland']"
    },
    {
        "slug": "peso-welter",
        "name": "Welterweight",
        "esName": "Peso Wélter",
        "champion": "BELAL MUHAMMAD",
        "tags": "['peso-welter', 'welterweight', 'belal-muhammad', 'shavkat-rakhmonov']"
    },
    {
        "slug": "peso-ligero",
        "name": "Lightweight",
        "esName": "Peso Ligero",
        "champion": "ISLAM MAKHACHEV",
        "tags": "['peso-ligero', 'lightweight', 'islam-makhachev', 'charles-oliveira']"
    },
    {
        "slug": "peso-pluma",
        "name": "Featherweight",
        "esName": "Peso Pluma",
        "champion": "ILIA TOPURIA",
        "tags": "['peso-pluma', 'featherweight', 'ilia-topuria', 'max-holloway']"
    },
    {
        "slug": "peso-gallo",
        "name": "Bantamweight",
        "esName": "Peso Gallo",
        "champion": "MERAB DVALISHVILI",
        "tags": "['peso-gallo', 'bantamweight', 'merab-dvalishvili', 'sean-omalley']"
    },
    {
        "slug": "peso-mosca",
        "name": "Flyweight",
        "esName": "Peso Mosca",
        "champion": "ALEXANDRE PANTOJA",
        "tags": "['peso-mosca', 'flyweight', 'alexandre-pantoja', 'brandon-royval']"
    }
]

# Read template
with open('src/pages/fighters/peso-pesado/index.astro', 'r') as f:
    content = f.read()

# Replace template parts
for div in divisions:
    new_content = content.replace("const division =  'Heavyweight'", f"const division = '{div['name']}'")
    new_content = new_content.replace("const divisionSlug = 'peso-pesado'", f"const divisionSlug = '{div['slug']}'")
    new_content = new_content.replace("const divisionEs = divisionInfo?.nameEs || 'Peso Pesado'", f"const divisionEs = divisionInfo?.nameEs || '{div['esName']}'")
    
    # Replace Champion
    new_content = new_content.replace("JON JONES", div['champion'])
    
    # Replace tags logic
    # Find the lines with tags and replace them
    new_content = re.sub(r"\['peso-pesado', 'heavyweight',.*?\]", div['tags'], new_content, flags=re.DOTALL)

    os.makedirs(f"src/pages/fighters/{div['slug']}", exist_ok=True)
    with open(f"src/pages/fighters/{div['slug']}/index.astro", 'w') as f:
        f.write(new_content)
        
print("Updated all divisions")
