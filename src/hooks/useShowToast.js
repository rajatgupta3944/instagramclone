import { useToast } from "@chakra-ui/react";

const useShowToast = () => {
    const toast = useToast();
    const showToast = (title, description, status, duration=3000, isClosable=true) => {
        toast({
            title: title,
            description: description,
            status: status,
            duration: duration,
            isClosable: isClosable,
            position: 'top'
        })
    }
    return showToast;
}

export default useShowToast;