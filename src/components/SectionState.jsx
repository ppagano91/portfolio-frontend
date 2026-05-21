import React from 'react'

/**
 * Estados compartidos de carga, error y vacío para secciones con datos de API.
 */
export function SectionLoading({ message = 'Cargando...' }) {
  return (
    <p className="text-center text-gray-500 dark:text-gray-400 py-8">{message}</p>
  )
}

export function SectionError({ message }) {
  return (
    <p className="text-center text-red-600 dark:text-red-400 py-8">
      {message || 'No se pudieron cargar los datos.'}
    </p>
  )
}

export function SectionEmpty({ message = 'No hay datos para mostrar.' }) {
  return (
    <p className="text-center text-gray-500 dark:text-gray-400 py-8">{message}</p>
  )
}
