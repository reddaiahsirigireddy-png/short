export default eventHandler((event) => {
  const protocol = getRequestProtocol(event)
  const host = getRequestHost(event)
  
  // Skip redirect for local development
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    return
  }
  
  // Redirect HTTP to HTTPS with 301 (permanent redirect)
  if (protocol === 'http') {
    return sendRedirect(event, `https://${host}${event.path}`, 301)
  }
})
