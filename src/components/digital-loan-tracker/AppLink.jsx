function AppLink({ href, children, onClick, ...props }) {
  const handleClick = (event) => {
    onClick?.(event)

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return
    }

    const url = new URL(href, window.location.href)

    if (url.origin !== window.location.origin) {
      return
    }

    event.preventDefault()
    window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export default AppLink
