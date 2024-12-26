import { i18nRouter } from 'next-i18n-router';
import { i18nConfig } from '../i18nConfig';

// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Liste des chemins à bloquer
  const blockedPaths = ['/wp-login.php', '/ss.php'];

  // Vérifier si la requête cible une des routes bloquées
  if (blockedPaths.includes(pathname)) {
    // Option 1: Retourner une réponse 403 Forbidden
    return new NextResponse('Forbidden', { status: 403 });

    // Option 2: Rediriger vers la page d'accueil ou une autre page
    // url.pathname = '/';
    // return NextResponse.redirect(url);

    // Option 3: Réécrire la requête pour retourner la page 404 personnalisée
    // return NextResponse.rewrite(new URL('/404', request.url));
  }

  // Bloquer toutes les requêtes vers des fichiers PHP (sécurité supplémentaire)
  if (pathname.endsWith('.php')) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // Si ce n'est pas une route bloquée, continuer avec le i18nRouter
  return i18nRouter(request, i18nConfig);
}

// Configurer les chemins sur lesquels le middleware doit s'appliquer
export const config = {
  matcher: [
    '/wp-login.php',
    '/ss.php',
    '/((?!api|static|.*\\..*|_next).*)'
  ],
};