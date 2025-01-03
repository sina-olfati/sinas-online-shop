import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImagesProps {
  images: string[];
  clickedIndex: number;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ImagesModal({images, clickedIndex, isOpen, onOpenChange }: ImagesProps) {

  const changeImage = (operation: string) => {
    if (operation === "i") {
      setShowedImage(showedImage+1)
    }
    if (operation === "d") {
      setShowedImage(showedImage-1)
    }
  }

  const [showedImage, setShowedImage] = useState(clickedIndex);

  useEffect(() => {
    setShowedImage(clickedIndex);
  }, [clickedIndex]);

  return (
    <Modal size="lg" placement="center" isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
      <ModalContent
        about="images"
        className="w-[100%] bg-transparent flex flex-col items-center justify-center gap-5 shadow-sm"
      >
        {(onClose) => (
          <>
            <ModalHeader
              about="main image"
              className="w-full flex items-center justify-center"
            >
              <Image
                src={images[showedImage]}
                className="w-[100%] rounded-xl"
                width={1000}
                height={1000}
                alt="product image"
              />

              <Button isIconOnly className="absolute left-0" onPress={() => changeImage("d")} isDisabled={showedImage === 0}><ChevronLeft /></Button>
              <Button isIconOnly className="absolute right-0" onPress={() => changeImage("i")} isDisabled={showedImage === images.length-1}><ChevronRight /></Button>
            </ModalHeader>

            <ModalBody
              about="other images"
              className="w-full flex flex-row items-center justify-center flex-wrap gap-0"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="px-2 cursor-pointer"
                  onClick={() => setShowedImage(index)}
                >
                  <Image
                    src={image}
                    className={`w-16 rounded-md ${showedImage === index ? "outline outline-primary/50" : null}`}
                    width={1000}
                    height={1000}
                    alt="product image"
                  />
                </div>
              ))}

              <Button
                className="absolute top-1 right-3 opacity-50"
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
