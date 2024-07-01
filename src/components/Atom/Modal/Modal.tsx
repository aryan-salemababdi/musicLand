import { ReactNode } from "react";
import { NextPage } from "next";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";
import useUploadModal from "@/hooks/useUploadModal";
import useAuthModal from "@/hooks/useAuthModal";

interface ModalProps {
  isOpen: boolean;
  onCheange: (open: boolean) => void;
  title: string;
  description: string;
  children: ReactNode
}


const Modal: NextPage<ModalProps> = ({
  isOpen,
  onCheange,
  title,
  description,
  children
}) => {
  const uploadModal = useUploadModal();
  const { onClose } = useAuthModal();
  return (
    <div>
      <Dialog.Root
        open={isOpen}
        defaultOpen={isOpen}
        onOpenChange={() => onCheange}
      >
        <Dialog.Portal>
          <Dialog.Overlay
            className="
          bg-neutral-900/90
          backdrop-blur-sm
          fixed
          inset-0
          "
          >
            <Dialog.Content
              className="
            fixed
            drop-shadow-md
            border
            border-neutral-700
            top-[50%]
            left-[50%]
            max-h-full
            h-full
            md:h-auto
            md:mx-h-[85vh]
            w-full
            md:w-[90vw]
            md:max-w-[450px]
            translate-x-[-50%]
            translate-y-[-50%]
            rounded-md
            bg-neutral-800
            p-[25px]
            focus:outline-none
            "
            >
              <Dialog.Title
                className="
              text-xl
              text-center
              font-bold
              mb-4
              "
              >
                {title}
              </Dialog.Title>
              <Dialog.Description
                className="
              mb-5
              text-sm
              leading-normal
              text-center
              "
              >
                {description}
              </Dialog.Description>
              <div>
                {children}
              </div>
              <Dialog.Close asChild>
                <button
                  className="
                text-neutral-400
                hover:text-white
                absolute
                top-[10px]
                right-[10px]
                inline-flex
                h-[25px]
                w-[25px]
                appearance-none
                items-center
                justify-center
                rounded-full
                focus:outline-none
                "
                  onClick={() => {
                    uploadModal.onClose();
                    onClose();
                  }}
                >
                  <IoMdClose />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default Modal;