import React, {useEffect} from "react";
import {useFormik} from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import Alert from "./Alert";

const LandingSection = () => {
    const {isLoading, response, submit} = useSubmit();
    const {onOpen, isOpen} = useAlertContext();
    useEffect(() => {
        // Check if the response has changed and is not empty
        if (response && isOpen === false) {
            onOpen(response.type, response.message);
            response.type === 'success' && formik.resetForm()
        }
    }, [response]);
    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            type: 'other',
            comment: ''
        },
        onSubmit: (values) => {
            console.log(values)
            submit('/usrl', values)
        },
        validationSchema: Yup.object({}).shape({
            firstName: Yup.string()
                .required('First name is required'),

            type: Yup.string().oneOf(['openSource', 'hireMe', 'other'])
                .required('Last name is required'),

            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),

            comment: Yup.string()
                .required('Comment is required'),
        }),
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#512DA8"
            py={16}
            spacing={8}
        >
            <VStack w="1024px" p={32} alignItems="flex-start">
                <Heading as="h1" id="contactme-section">
                    Contact me
                </Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                                <FormLabel htmlFor="firstName">Name</FormLabel>
                                <Input
                                    id="firstName"
                                    name="firstName"  {...formik.getFieldProps('firstName')}
                                />
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"  {...formik.getFieldProps('email')}
                                />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                                <Select id="type" name="type"  {...formik.getFieldProps('type')}>
                                    <option value="hireMe">Freelance project proposal</option>
                                    <option value="openSource">
                                        Open source consultancy session
                                    </option>
                                    <option value="other">Other</option>
                                </Select>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                                <FormLabel htmlFor="comment">Your message</FormLabel>
                                <Textarea
                                    id="comment"
                                    name="comment"
                                    height={250}  {...formik.getFieldProps('comment')}
                                />
                                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                                Submit
                            </Button>
                        </VStack>
                    </form>
                    <Alert/>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default LandingSection;
