import { ReactNode, useEffect, useState, useTransition } from "react"
import { createPortal } from "react-dom"

function useModal(id: string) {
    const [open, setOpen] = useState(false)
    const [container, setContainer] = useState<HTMLElement | null>(null)
    const [, startTransition] = useTransition()

    useEffect(() => {
        if (open) {
            const container = generateModalContainer(id)
            document.body.appendChild(container)
            setContainer(container)
            setBodyScrollbar(true)

            return () => {
                document.body.removeChild(container)
                setBodyScrollbar(false)
            }
        }
        else {
            setBodyScrollbar(false)
        }
    }, [open, id])

    function generateModalContainer(id: string) {
        const container = document.createElement('div')
        container.id = id
        return container
    }

    function setBodyScrollbar(value: boolean) {
        document.body.style.overflow = value ? 'hidden' : ''
    }

    function openModal() {
        setOpen(true)
    }

    function closeModal() {
        setOpen(false)
    }

    function clearModal() {
        setOpen(false)
        startTransition(() => setContainer(null))
    }

    function renderModal(content: ReactNode) {
        if (!container) return null
        return createPortal(content, container)
    }

    return {
        control: {
            closeModal,
            clearModal,
            openModal,
            renderModal,
        }
    }
}

export {
    useModal
}