// pages/DeleteTournamentModal.jsx

import React from 'react';
import {
    Button,
    Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalFooter, ModalBody, ModalCloseButton,
    Text,
} from '@chakra-ui/react';

const DeleteTournamentModal = ({ isOpen, onClose, onDelete, tournament }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Tournament</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {
            tournament ? (
              <Text>
                Are you sure you want to delete <Text as="strong" display="inline">{tournament}</Text>?
                <br/>
                This action cannot be undone.
              </Text>
            ) : 'Are you sure you want to delete this tournament? This action cannot be undone.'
          }
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='red' mr={3} onClick={() => onDelete(tournament)}>
            Delete
          </Button>
          <Button variant='ghost' onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteTournamentModal;