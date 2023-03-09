<template>
    <div class="w-9/12 md:w-1/2 mx-auto grow">
        <h1>Login</h1>
        <FormKit
        type="form"
        @submit="submitLoginForm">
        <FormKit
            type="email"
            name="email"
            id="email"
            label="email"
            help="Your e-mail"
            placeholder="someone@email.com"
            validation="email"
            validation-visibility="live"
        />
        <FormKit
            type="password"
            name="password"
            id="password"
            label="password"
            help="Your password"
            validation="min:3"
            validation-visibility="live"
        />
    </FormKit>
    </div>
</template>
<script setup>
const submitLoginForm = async(fields) => {
    await new Promise((r) => setTimeout(r, 1000))
    alert(JSON.stringify(fields))
}
</script>
