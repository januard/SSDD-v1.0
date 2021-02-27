
<?php 

    function generateRandomString($numbers, $lower_letters, $upper_letters, $length, $exclude) {
        $characters = $random_string = '';
        $characters .= $numbers == 1 ? '0123456789' : '';
        $characters .= $lower_letters == 1 ? 'abcdefghijklmnopqrstuvwxyz' : '';
        $characters .= $upper_letters == 1 ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
        $characters_length = strlen($characters);
        for($i = 0; $i < $length; $i++) {
            $random_string .= $characters[rand(0, $characters_length - 1)];
        }
        return $random_string;
    }

    function getDefaultMessage($code) {
        $message = '';
        $code == 'ESU' ? $message = 'Something went wrong. ' : true; // Error System Undefined
        $code == 'ESA' ? $message = 'Unauthorized: It appears that you don\'t have permission to access this request. ' : true; // Error System Undefined
        $code == 'ESNF' ? $message = 'Not found. ' : true; // Error System Not Found
        $code == 'SCNSU' ? $message = 'Successfully created new user. ' : true; // Successfully Created New System User
        $code == 'SUPD' ? $message = 'Successfully updated program details. ' : true; // Successfully Updated Program Details
        $code == 'SUSRATA' ? $message = 'Successfully updated, the request application can now proceed to appointment. ' : true; // Successfully Updated Services Application Request To Appointment
        $code == 'SCNA' ? $message = 'Successfully created new appointment. ' : true; // Successfully Created New Appointment
        $code == 'SCNP' ? $message = 'Successfully created new program. ' : true; // Successfully Created New Program
        $code == 'SCNSA' ? $message = 'Successfully created new services application. ' : true; // Successfully Created New Services Application
        $code == 'SCNC' ? $message = 'Successfully created new certification. ' : true; // Successfully Created New Certification
        $code == 'SCNAR' ? $message = 'Successfully created new assistance request. ' : true; // Successfully Created New Assistance Request
        $code == 'SCNR' ? $message = 'Successfully created new referral. ' : true; // Successfully Created New Referral
        $code == 'SUSUD' ? $message = 'Successfully updated user details. ' : true; // Successfully Updated System User Detail
        $code == 'SSSA' ? $message = 'Thank you, your application has been successfully submitted. We\'ll keep in touch as soon as possible. ' : true; // Successfully Submitted Sevices Application
        $code == 'SDTAR' ? $message = 'Successfully decline, the application request. ' : true; // Successfully Declined The Application Request

        return $message;
    }

    function sanitize($data) {
        $data = strip_tags("". $data);
        $data = htmlspecialchars($data);
        $sql_injection_characters = array(
            '&quot;' => '',
            '"' => '',
            '\\' => '',
            '\'' => '',
            '=' => '',
            '{' => '',
            '/' => '',
            '*' => '',
        );
        foreach($sql_injection_characters as $key => $value) {
            $data = str_replace($key, $value, $data);
        }
        return $data;
    }