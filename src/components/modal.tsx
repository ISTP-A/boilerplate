import { ComponentProps } from "react"

function Modal({ children }: ComponentProps<'div'>) {
    return <div className="fixed inset-0  flex items-center justify-center">{children}</div>
}

function ModalOverlay({ children }: ComponentProps<'div'>) {
    return <div className="absolute inset-0 bg-black/50">{children}</div>
}

function ModalContent({ children }: ComponentProps<'div'>) {
    return <div className="bg-white z-10">{children}</div>
}

function ModalHeader({ children }: ComponentProps<'div'>) {
    return <div className="px-8 pt-8 pb-2">{children}</div>
}

function ModalBody({ children }: ComponentProps<'div'>) {
    return <div className="px-8 py-4">{children}</div>
}

function ModalFooter({ children }: ComponentProps<'div'>) {
    return <div className="px-8 pt-2 pb-8">{children}</div>
}

export {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
}