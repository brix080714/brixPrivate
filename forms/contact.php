<?php
error_reporting(0);
ini_set('display_errors', 0);
header('Content-Type: application/json; charset=utf-8');

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit;
}

// Get and sanitize input
$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email = isset($_POST['email']) ? trim(strip_tags($_POST['email'])) : '';
$subject = isset($_POST['subject']) ? trim(strip_tags($_POST['subject'])) : '';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

// Validate
if (empty($name)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name is required']);
    exit;
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Valid email is required']);
    exit;
}

if (empty($subject)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Subject is required']);
    exit;
}

if (empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Message is required']);
    exit;
}

// Prepare data
$contact_data = [
    'name' => $name,
    'email' => $email,
    'subject' => $subject,
    'message' => $message,
    'timestamp' => date('Y-m-d H:i:s'),
    'date' => date('F j, Y \a\t g:i A'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'Unknown'
];

// Save to JSON file
$messages_file = __DIR__ . '/messages.json';
$all_messages = [];

if (file_exists($messages_file)) {
    $json_content = file_get_contents($messages_file);
    if ($json_content) {
        $all_messages = json_decode($json_content, true);
        if (!is_array($all_messages)) {
            $all_messages = [];
        }
    }
}

$all_messages[] = $contact_data;

// Write to file
$save_result = file_put_contents(
    $messages_file,
    json_encode($all_messages, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
);

if ($save_result === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to save message']);
    exit;
}

// Send email
$to = 'brixbrionngos14@gmail.com';
$email_subject = 'New Contact Form: ' . $subject;

$html_message = "
<html>
<head>
<style>
    body { font-family: Arial, sans-serif; }
    .container { max-width: 600px; margin: 20px auto; padding: 20px; background: #f9f9f9; border-radius: 8px; }
    .header { background: #667eea; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: white; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin: 15px 0; }
    .label { font-weight: bold; color: #667eea; }
    .value { margin-top: 5px; padding: 10px; background: #f5f5f5; border-radius: 4px; }
</style>
</head>
<body>
<div class='container'>
    <div class='header'><h2>New Contact Form Message</h2></div>
    <div class='content'>
        <div class='field'>
            <div class='label'>From:</div>
            <div class='value'>{$name} ({$email})</div>
        </div>
        <div class='field'>
            <div class='label'>Subject:</div>
            <div class='value'>{$subject}</div>
        </div>
        <div class='field'>
            <div class='label'>Message:</div>
            <div class='value' style='white-space: pre-wrap; word-wrap: break-word;'>" . htmlspecialchars($message) . "</div>
        </div>
        <div class='field' style='font-size: 12px; color: #999; margin-top: 20px;'>
            <div>{$contact_data['date']}</div>
        </div>
    </div>
</div>
</body>
</html>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: noreply@brixportfolio.com\r\n";
$headers .= "Reply-To: {$email}\r\n";

@mail($to, $email_subject, $html_message, $headers);

// Return success
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Your message has been sent successfully! I will get back to you soon.'
]);
exit;

