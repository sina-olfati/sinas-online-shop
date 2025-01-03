import Image from "next/image";
import { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "@nextui-org/modal";
import { Button } from "@nextui-org/react";
import { X } from "lucide-react";


interface ImagesProps {
    images: string[];
    clickedIndex: number;
    close: React.Dispatch<React.SetStateAction<number | undefined>>;
    isOpen: any;
    onOpenChange: any;
}


export function ImagesModal ({images, clickedIndex, close, isOpen, onOpenChange}: ImagesProps) {

    const [showedImage, setShowedImage] = useState(clickedIndex)

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        {/* <Modal isOpen={isOpen} className="fixed inset-0 z-100 bg-black/30 p-10 flex flex-col justify-center items-center gap-5 w-full"> */}

            <ModalContent about="images" className="border border-primary w-[100%] bg-transparent flex flex-col items-center justify-center gap-5">
                {(onClose) => (
                    <>

                        <ModalHeader about="main image" className="w-full flex items-center justify-center">
                            <Image 
                                src={images[showedImage]} 
                                className="w-[100%] rounded-xl" 
                                width={1000} 
                                height={1000} 
                                alt="product image" 
                            />
                        </ModalHeader>

                        <ModalBody about="other images" className="w-full flex flex-row items-center justify-center flex-wrap gap-0">
                            {images.map((image, index) => 
                                <div 
                                    key={index} 
                                    className="px-2 cursor-pointer"
                                    onClick={() => setShowedImage(index)}
                                >
                                    <Image 
                                        src={image} 
                                        className="w-16 rounded-md shadow" 
                                        width={1000} 
                                        height={1000} 
                                        alt="product image"
                                    />
                                </div>
                            )}

                            <Button className="fixed top-10 left-10" color="danger" variant="shadow" isIconOnly onPress={onClose}>
                                <X />
                            </Button>
                        </ModalBody>

                    </>
                )}

            </ModalContent>

        </Modal>
    )
}


{/* <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                  adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}