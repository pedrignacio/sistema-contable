# Guía de Demostración - Sistema Contable (Módulo 0)

Esta guía está diseñada para presentar el **Módulo 0: Sistema Base** al cliente. El objetivo es validar la arquitectura, la seguridad y la experiencia de usuario diferenciada por roles.

## 📋 Prerrequisitos
Asegúrate de tener el sistema corriendo en dos terminales:
1. **Backend**: `npm run start:dev` (Puerto 3001)
2. **Frontend**: `npm run dev` (Puerto 3000)
3. **Base de Datos**: Poblada con `npx prisma db seed`

---

## 🗣️ Introducción (1-2 minutos)
*   **Objetivo**: "Hoy queremos mostrarles los cimientos del sistema. Ya tenemos operativa la 'carcasa' segura sobre la cual construiremos las funcionalidades contables."
*   **Puntos Clave**:
    *   Seguridad (Autenticación robusta).
    *   Roles definidos (Cada usuario ve solo lo que debe ver).
    *   Diseño moderno y rápido.

---

## 🎬 Escenario 1: La Visión del Supervisor (Admin)
*   **Acción**: Iniciar sesión con `supervisor@demo.cl` / `123456`.
*   **Qué mostrar**:
    *   El Dashboard con tarjetas de resumen (Auditoría, Usuarios, Reportes).
    *   Destacar los colores (Ámbar para alertas, Azul para reportes).
*   **Narrativa**: "Este es el panel de control general. Como Supervisor, usted tiene una vista de águila sobre todo lo que pasa: alertas de auditoría, cuántos contadores están activos y reportes consolidados."

---

## 🎬 Escenario 2: La Visión del Contador (Operativo)
*   **Acción**: Cerrar sesión y entrar con `contador@demo.cl` / `123456`.
*   **Qué mostrar**:
    *   Panel enfocado en "Gestión de Empresas".
    *   Lista de Vencimientos (F29, Previred).
    *   Botones de acción rápida (+ Nueva Declaración).
*   **Narrativa**: "El Contador tiene una vista 100% operativa. No se distrae con configuraciones globales; entra directo a gestionar empresas y ver qué vence hoy. Esto mejora la productividad."

---

## 🎬 Escenario 3: La Visión del Cliente (Usuario Final)
*   **Acción**: Cerrar sesión y entrar con `cliente@demo.cl` / `123456`.
*   **Qué mostrar**:
    *   Tarjeta de bienvenida amigable con degradado.
    *   Mensaje claro: "Tu situación tributaria está al día".
    *   Botones simples: "Ver Carpeta", "Solicitar Certificado".
*   **Narrativa**: "Para sus clientes, la experiencia es tranquilidad. Entran y ven un semáforo simple: ¿Estoy al día o debo algo? Pueden auto-atenderse descargando certificados sin llamar al contador."

---

## 🎬 Escenario 4: Registro de Nuevos Usuarios
*   **Acción**: Cerrar sesión, ir a "Registrarse".
*   **Qué mostrar**:
    *   Crear un usuario nuevo (ej: `nuevo@empresa.cl`).
    *   Seleccionar un rol (ej: Cliente).
    *   Ver cómo el sistema loguea automáticamente y muestra el dashboard correcto.
*   **Narrativa**: "El sistema es escalable. Podemos sumar nuevos usuarios en segundos y el sistema sabe exactamente qué permisos darles."

---

## ✅ Cierre
*   Preguntar: "¿Les hace sentido esta división de roles?"
*   Próximos pasos: "Con esta base aprobada, en el siguiente sprint comenzaremos a conectar los datos reales del SII (Módulo 1)."
