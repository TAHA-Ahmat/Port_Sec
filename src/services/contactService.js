/**
 * Service pour gérer l'envoi du formulaire de contact
 * Supporte Netlify Forms et API custom
 */

/**
 * Envoie le formulaire via Netlify Forms
 * @param {Object} formData - { name, email, message }
 * @returns {Promise<Object>} - Résultat de l'envoi
 */
export const submitToNetlify = async (formData) => {
  // Encoder les données au format form-urlencoded
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...formData
      })
    })

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`)
    }

    return {
      success: true,
      message: 'Message envoyé avec succès'
    }
  } catch (error) {
    console.error('Erreur Netlify Forms:', error)
    throw new Error('Impossible d\'envoyer le message. Veuillez réessayer.')
  }
}

/**
 * Envoie le formulaire via une API custom
 * @param {Object} formData - { name, email, message }
 * @returns {Promise<Object>} - Résultat de l'envoi
 */
export const submitToAPI = async (formData) => {
  // Pour une future implémentation avec votre propre backend
  // import axios from 'axios'
  // const response = await axios.post('/api/contact', formData)
  // return response.data

  throw new Error('API backend non configurée')
}

/**
 * Fonction principale d'envoi
 * Essaie d'abord Netlify Forms, puis fallback vers API si configurée
 */
export const submitContactForm = async (formData) => {
  try {
    // Utiliser Netlify Forms par défaut
    return await submitToNetlify(formData)
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    throw error
  }
}
