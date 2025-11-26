# GitHub Actions: Automatic Rankings Update Setup

## ✅ Implementación Completada

### Workflow Creado
- **Archivo**: `.github/workflows/update-rankings.yml`
- **Frecuencia**: Cada lunes a las 3 AM (después de eventos UFC del fin de semana)
- **Ejecución manual**: Disponible desde GitHub UI

## 📋 Configuración Requerida

### 1. Crear Netlify Build Hook

1. Ve a [Netlify Dashboard](https://app.netlify.com)
2. Selecciona tu sitio (quimbara.org)
3. **Build & deploy** → **Build hooks**
4. Click **Add build hook**
5. Nombre: `Auto Rankings Update`
6. Branch: `main`
7. Click **Save**
8. **Copia el ID** (última parte de la URL)
   - Ejemplo: `https://api.netlify.com/build_hooks/abc123def456`
   - ID: `abc123def456`

### 2. Agregar Secret en GitHub

1. Ve a tu repositorio en GitHub
2. **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NETLIFY_BUILD_HOOK`
5. Value: (pega el ID copiado)
6. Click **Add secret**

### 3. Verificar que existe MMA_API_KEY

En el mismo lugar de secrets, verifica que existe:
- `MMA_API_KEY` con tu API key de mma.api-sports.io

## 🎯 Cómo Funciona

1. **Automático**: Cada lunes a las 3 AM
   - Ejecuta `bun run fetch:champions`
   - Si hay cambios, commit y push
   - Trigger redeploy en Netlify

2. **Manual**: Desde GitHub
   - Actions → "Update UFC Rankings" → "Run workflow"

## 🔄 Actualización Manual Inmediata

Si necesitas actualizar YA:
```bash
bun run fetch:champions
git add src/data/champions-generated.json
git commit -m "chore: Update UFC rankings"
git push
```

## ⚠️ Importante

Los IDs del P4P están hardcodeados en `scripts/fetch-champions.ts`.
Si cambia el ranking, actualiza manualmente las líneas 26-37.
