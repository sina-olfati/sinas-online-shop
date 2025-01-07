"use client";

import { Button } from "@/src/components/ui/button";

import {
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Search } from "lucide-react";
import { SearchInput } from "../../searchInput";

export function MobileSearch() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        //   onClick={() => null}
        className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all"
        onClick={onOpen}
      >
        <Search className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
      </Button>

      <Modal
        size="md"
        placement="top"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        hideCloseButton
      >
        <ModalContent
          about="images"
          className="w-[100%] mt-16 h-72 bg-transparent items-center justify-start shadow-sm"
        >
          {() => (
            <>
              <ModalHeader
                about="main image"
                className="w-full flex items-center justify-center"
              >
                <SearchInput />
              </ModalHeader>

              {/* <ModalBody
                    about="other images"
                    className="w-full flex flex-row items-center justify-center flex-wrap gap-0"
                    > */}

              {/* <Button
                            className="absolute top-1 right-0 opacity-50"
                            color="danger"
                            variant="destructive"
                            onClick={onClose}
                        >
                            <X />
                        </Button> */}

              {/* </ModalBody> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
