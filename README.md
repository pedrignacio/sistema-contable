🧾 Sistema Integral de Gestión Contable

Backend + Frontend | Arquitectura Modular y Escalable

📌 Descripción General

Este proyecto corresponde al desarrollo de un Sistema Integral de Gestión Contable, orientado a pymes y contadores, construido bajo una arquitectura moderna, desacoplada y escalable.

El sistema contempla backend (API) y frontend (Web App) como proyectos independientes dentro de un mismo repositorio (monorepo).

⚠️ ALCANCE ACTUAL DEL PROYECTO
En esta etapa SOLO se desarrollará el MÓDULO 1 (Base del Sistema).
Los módulos contables, reportes e integraciones quedan planificados, pero no implementados aún.

🎯 Objetivos del Proyecto

Construir una base técnica sólida y profesional

Implementar una arquitectura backend limpia y modular

Preparar el sistema para crecimiento futuro

Facilitar la posterior integración de:

Contabilidad completa

Reportes financieros

Integración con SII

Facturación electrónica

🧱 Arquitectura General

El sistema utiliza una arquitectura desacoplada:

Frontend (Next.js)
        ↓
Backend (NestJS API REST)
        ↓
PostgreSQL (Supabase)


Frontend consume la API mediante HTTP

Backend concentra reglas de negocio

Base de datos centralizada y segura

🧩 Stack Tecnológico
🔙 Backend

NestJS

TypeScript

Prisma ORM

JWT (autenticación)

PostgreSQL

Supabase (Cloud DB)

🌐 Frontend

Next.js (React)

TypeScript

TailwindCSS

shadcn/ui

Diseño responsive y moderno

🎨 Diseño UI

Colores principales:

Verde (confianza / finanzas)

Amarillo (alertas / estados)

UI limpia, profesional y amigable

🗂️ Estructura del Repositorio (Monorepo)
sistema-contable/
 ├─ backend/
 │  ├─ prisma/
 │  │  └─ schema.prisma
 │  ├─ src/
 │  │  ├─ prisma/
 │  │  ├─ auth/
 │  │  ├─ users/
 │  │  ├─ companies/
 │  │  └─ modules_futuros/
 │  └─ package.json
 │
 ├─ frontend/
 │  ├─ app/
 │  ├─ components/
 │  ├─ styles/
 │  └─ package.json
 │
 └─ README.md

🗺️ Roadmap General del Sistema
🟢 MÓDULO 1 — Base del Sistema (ÚNICO A DESARROLLAR AHORA)

Estado: 🟢 Completado

Backend

Infraestructura NestJS

Prisma configurado

Conexión a PostgreSQL (Supabase)

Modelos base:

Usuario

Empresa

Relación Usuario–Empresa

Autenticación:

Login

Registro

JWT

Hash de contraseñas

CRUD:

Usuarios

Empresas

Frontend

Estructura base Next.js

Sistema de autenticación

Login / Register

Layout base

Dashboard inicial (placeholder)

🟡 MÓDULO 2 — Gestión de Empresas (EN PROGRESO)

Estado: 🟡 En desarrollo

Backend

CRUD Empresas

Relación Usuario-Empresa

Endpoints protegidos

🟠 MÓDULO 3 — Reportes (PLANIFICADO)

(No se implementa en esta etapa)

Libro diario

Libro mayor

Balance general

Estado de resultados

Exportación PDF / Excel

🔴 MÓDULO 4 — Integraciones (PLANIFICADO)

(No se implementa en esta etapa)

Integración SII

Facturación electrónica

Automatizaciones

Pagos

🧩 Modelos de Datos (Módulo 1)
User

id (UUID)

email

password

createdAt

Company

id (UUID)

name

rut

createdAt

UserCompany

userId

companyId

role (simple)

🔐 Seguridad y Autenticación

Autenticación basada en JWT

Passwords hasheados

Guards por módulo

Variables sensibles en .env

Sin roles complejos (RBAC) en esta etapa

🛠️ Configuración del Entorno
Variables de Entorno (.env)
DATABASE_URL="postgresql://postgres.<PROJECT_ID>:<PASSWORD>@aws-1-sa-east-1.pooler.supabase.com:5432/postgres"

SUPABASE_URL="https://<PROJECT_ID>.supabase.co"
SUPABASE_ANON_KEY="sb_publishable_xxx"
SUPABASE_SERVICE_ROLE_KEY="sb_secret_xxx"

JWT_SECRET="super_secret_key"


⚠️ Nunca subir .env al repositorio
🚫 Fuera de Alcance (Módulo 1)

❌ Contabilidad

❌ Reportes

❌ Integración SII

❌ Facturación electrónica

❌ Roles avanzados

💼 Enfoque Profesional

Este proyecto está diseñado como:

Base real para sistema contable

Producto escalable

MVP vendible

Arquitectura defendible frente a cliente