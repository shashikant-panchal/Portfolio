import resumePdf from '../assets/Shashikant_Panchal_Resume.pdf'

export const downloadResume = async (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault()
  }

  const fileName = 'Shashikant_Panchal_Resume.pdf'
  const targetUrl = resumePdf || '/Shashikant_Panchal_Resume.pdf'

  try {
    // Fetch asset as a blob for guaranteed direct file download (avoids browser opening in page or showing 404/not available)
    const response = await fetch(targetUrl)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const blob = await response.blob()
    const blobUrl = window.URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = blobUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()

    setTimeout(() => {
      document.body.removeChild(link)
      window.URL.revokeObjectURL(blobUrl)
    }, 100)
  } catch (err) {
    console.warn('Blob download fallback triggered:', err)
    // Fallback to standard anchor download
    const link = document.createElement('a')
    link.href = targetUrl
    link.download = fileName
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}
