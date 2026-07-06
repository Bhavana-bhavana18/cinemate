import React from 'react'
import { useEffect } from 'react'

export const useTitle = (title) => {
    useEffect(() => {
        document.title = title ? `${title} - Cinemate` : 'Cinemate';
    }, [title]);
  return null
}
