# Guía de Despliegue - Inmobiliaria San Benito

Esta guía proporciona instrucciones paso a paso para desplegar tu sitio web en GitHub y Netlify.

## Requisitos Previos

Antes de comenzar, asegúrate de tener:
- Una cuenta de GitHub (gratuita en [github.com](https://github.com))
- Una cuenta de Netlify (gratuita en [netlify.com](https://netlify.com))
- Git instalado en tu computadora
- Node.js y pnpm instalados

## Paso 1: Preparar tu Repositorio Local

### Inicializar Git (si aún no lo has hecho)

```bash
cd inmobiliaria-san-benito
git init
git add .
git commit -m "Commit inicial: Sitio web de Inmobiliaria San Benito"
```

### Verificar que la construcción funciona

```bash
pnpm install
pnpm build
```

Deberías ver un resultado como:
```
✓ built in X.XXs
```

## Paso 2: Crear un Repositorio en GitHub

### Opción A: Crear un nuevo repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Ingresa el nombre del repositorio: `inmobiliaria-san-benito`
3. Agrega descripción: "Sitio web profesional de bienes raíces para Inmobiliaria San Benito"
4. Elige visibilidad: **Público** (recomendado para portafolio) o **Privado**
5. Haz clic en "Crear repositorio"

### Opción B: Usando GitHub CLI

```bash
gh repo create inmobiliaria-san-benito --public --source=. --remote=origin --push
```

## Paso 3: Enviar a GitHub

### Agregar remoto y enviar

```bash
# Si creaste el repositorio en GitHub, agrega el remoto
git remote add origin https://github.com/TU_USUARIO/inmobiliaria-san-benito.git
git branch -M main
git push -u origin main
```

### Verificar en GitHub

Visita `https://github.com/TU_USUARIO/inmobiliaria-san-benito` para confirmar que tu código se ha subido.

## Paso 4: Desplegar en Netlify

### Opción A: Desplegar a través de la Interfaz de Netlify (Recomendado)

1. **Ir a Netlify**
   - Visita [app.netlify.com](https://app.netlify.com)
   - Inicia sesión con GitHub (o crea una cuenta)

2. **Conectar Repositorio**
   - Haz clic en "Nuevo sitio desde Git"
   - Haz clic en "GitHub"
   - Selecciona tu repositorio: `inmobiliaria-san-benito`

3. **Configurar Parámetros de Construcción**
   - **Directorio base**: (dejar vacío)
   - **Comando de construcción**: `pnpm build`
   - **Directorio de publicación**: `dist/public`

4. **Desplegar**
   - Haz clic en "Desplegar sitio"
   - Espera a que se complete la construcción (generalmente 1-2 minutos)
   - Tu sitio estará en vivo en una URL de Netlify como: `https://inmobiliaria-san-benito-abc123.netlify.app`

### Opción B: Desplegar a través de Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Iniciar sesión en Netlify
netlify login

# Desplegar
netlify deploy --prod --dir=dist/public
```

## Paso 5: Configurar Dominio Personalizado (Opcional)

### En el Panel de Netlify

1. Ve a la configuración de tu sitio
2. Haz clic en "Gestión de dominios"
3. Haz clic en "Agregar dominio personalizado"
4. Ingresa tu dominio (p. ej., `sanbenitoreal.estate`)
5. Sigue las instrucciones de configuración de DNS

### Actualizar Registros DNS

Contacta a tu registrador de dominios y actualiza los registros DNS para que apunten a Netlify:
- **Tipo**: CNAME
- **Nombre**: www
- **Valor**: (proporcionado por Netlify)

O usa los servidores de nombres de Netlify para una configuración más fácil.

## Paso 6: Habilitar HTTPS

Netlify proporciona automáticamente HTTPS gratuito con Let's Encrypt. ¡No se requiere configuración adicional!

## Paso 7: Configurar Despliegue Continuo

Tu sitio se redesplegará automáticamente cada vez que envíes a GitHub:

1. Realiza cambios localmente
2. Confirma y envía:
   ```bash
   git add .
   git commit -m "Actualizar listados de propiedades"
   git push origin main
   ```
3. Netlify automáticamente reconstruye y despliega
4. Tus cambios estarán en vivo en 1-2 minutos

## Actualizar tu Sitio Web

### Realizar Cambios Localmente

```bash
# Editar archivos en client/src/pages/Home.tsx u otros archivos
# Probar localmente
pnpm dev

# Construir y verificar
pnpm build
```

### Desplegar Cambios

```bash
git add .
git commit -m "Describe tus cambios"
git push origin main
```

¡Netlify automáticamente reconstruirá y desplegará!

## Solución de Problemas

### La Construcción Falla en Netlify

1. Revisa los registros de construcción en el panel de Netlify
2. Verifica que `pnpm build` funcione localmente
3. Asegúrate de que el directorio `dist/public` exista después de la construcción
4. Verifica la compatibilidad de versión de Node.js

### El Sitio Muestra Contenido Antiguo

1. Borra el caché del navegador (Ctrl+Mayús+Supr o Cmd+Mayús+Supr)
2. Verifica el estado de despliegue en Netlify
3. Fuerza un nuevo despliegue desde el panel de Netlify

### El Dominio Personalizado No Funciona

1. Verifica que los registros DNS se hayan actualizado (puede tomar 24-48 horas)
2. Revisa la configuración del registrador de dominios
3. Usa los servidores de nombres de Netlify para una configuración más rápida

## Optimización de Rendimiento

### Habilitar Caché

En el panel de Netlify:
1. Ve a "Construir y desplegar" → "Caché"
2. Haz clic en "Borrar caché y redesplegador"

### Monitorear Rendimiento

- Usa [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- Revisa Netlify Analytics
- Monitorea Core Web Vitals

## Seguridad

### Variables de Entorno

Si agregas datos sensibles:

1. Crea archivo `.env.local` (nunca confirmar)
2. Agrega a `.gitignore`
3. En Netlify: Configuración → Construir y desplegar → Entorno

### HTTPS

- Habilitado automáticamente por Netlify
- Se renueva automáticamente
- No se requiere configuración adicional

## Revertir a Versión Anterior

Si algo sale mal:

1. En el panel de Netlify, ve a "Despliegues"
2. Encuentra el despliegue anterior que funcionaba
3. Haz clic en "Publicar despliegue"

O revierte en Git:

```bash
git revert HEAD
git push origin main
```

## Recursos Adicionales

- [Documentación de Netlify](https://docs.netlify.com)
- [Guía de GitHub Pages](https://pages.github.com)
- [Guía de Despliegue de Vite](https://vitejs.dev/guide/static-deploy.html)
- [Mejores Prácticas de React](https://react.dev)

## Soporte

Para problemas:
1. Revisa los registros de construcción de Netlify
2. Revisa GitHub Actions (si está habilitado)
3. Prueba localmente con `pnpm dev`
4. Revisa la consola del navegador para errores

---

**¡Tu sitio web ahora está en vivo y listo para mostrar Inmobiliaria San Benito al mundo!**
