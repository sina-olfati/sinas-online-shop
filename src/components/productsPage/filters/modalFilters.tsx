import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
  } from "@nextui-org/modal";
  import { Button } from "@nextui-org/react";
  import { X } from "lucide-react";
  import { Filters } from "./filters";
  
  interface ModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
  }
  
  export function ModalFilters({ isOpen, onOpenChange }: ModalProps) {

  
    return (
      <Modal size="lg" placement="center" isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent
          about="images"
          className="w-[100%] bg-transparent flex flex-col items-center justify-center gap-5 shadow-sm"
        >
          {(onClose: () => void) => (
            <>
              <ModalHeader
                about="main image"
                className="w-full flex items-center justify-center px-5"
              >
                <Filters />
              </ModalHeader>
  
              <ModalBody
                about="other images"
                className="w-full flex flex-row items-center justify-center flex-wrap gap-0"
              >
                <Button
                  className="absolute top-14 right-10 opacity-50"
                  color="danger"
                  variant="shadow"
                  isIconOnly
                  onPress={onClose}
                >
                  <X />
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  }
  