import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('../pages/**/*.tsx', { eager: true }) as Record<string, { default: React.ComponentType<any> }>
      const path = `../pages/${name}.tsx`
      console.log('Resolving Inertia Page:', path)
      const page = pages[path]
      if (!page || !page.default) {
        console.error('Page not found or missing export for:', path)
        throw new Error(`Page "${name}" not found or missing default export`)
      }
      return page.default
    },
    setup: ({ App, props }) => <App {...props} />,
  })
}