import React from 'react';
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogContentText, 
    DialogActions, 
    Button } from '@material-ui/core';

const BackupAlert = props => {
    return (
        // <>
        // </>
        <Dialog
            open={props.openAlert}
        >
            <DialogTitle>{"Restore our chat backup?"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Hey buddy, good news! I just found a backup of our most recent
                    conversation, would you like me to restore that backup?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button id="restore-button" onClick={props.handleRestore}>
                    Yes, restore!
                </Button>
                <Button id="new-convo-button" onClick={props.handleNewConvo}>
                    No, start a new conversation!
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default BackupAlert;
