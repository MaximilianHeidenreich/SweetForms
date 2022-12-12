<script lang="ts">
    import { Highlight } from "svelte-highlight";
    import xml from "svelte-highlight/languages/xml";
    import "svelte-highlight/styles/github.css";


    // Code snippets
    const code1 = `<form action="" method="post">
    ...
</form>`;
    const code2 = `https://sweetforms.<username>.deta.sh/api/submit/<form_id>`;
    const code3 = `<form action="https://sweetforms.maxi.deta.sh/api/submit/contact_form_example" method="post">
    ...
</form>`;
    const code4 = `<input type="text" name="collect_name" placeholder="John Doe" />
<input type="email" name="collect_name" placeholder="john@doe.com" />
<input type="number" name="collect_age" placeholder="25" />
<textarea rows="4" name="collect_message" placeholder="You message"></textarea>
<button type="submit">Submit</button>`;
</script>

<section>
    <h2 class="mb-2">Getting started</h2>
    <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-between cursor-pointer">
            <h4 class="font-medium text-gray-900">
                1. Create your HTML form.
            </h4>
            <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                <svg class="absolute group-open:opacity-0 h-5 inset-0 opacity-100 w-5"fill="none"stroke="currentColor"stroke-width="2"viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap="round"stroke-linejoin="round"/></svg>
                <svg class="absolute group-open:opacity-100 h-5 inset-0 opacity-0 w-5"fill="none"stroke="currentColor"stroke-width="2"viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap="round"stroke-linejoin="round"/></svg>
            </span>
        </summary>
        <p class="my-4 leading-relaxed text-gray-700">
            Create a standard HTML form. Make sure the <code>method</code> attribute is set to <code>post</code>.
        </p>
        <p class="leading-relaxed">
            Example:
        </p>
        <Highlight language={xml} code={code1} />
    </details>
    <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-between cursor-pointer">
            <h4 class="font-medium text-gray-900">
                2. Set action url.
            </h4>
            <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                <svg class="absolute group-open:opacity-0 h-5 inset-0 opacity-100 w-5"fill="none"stroke="currentColor"stroke-width="2"viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap="round"stroke-linejoin="round"/></svg>
                <svg class="absolute group-open:opacity-100 h-5 inset-0 opacity-0 w-5"fill="none"stroke="currentColor"stroke-width="2"viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap="round"stroke-linejoin="round"/></svg>
            </span>
        </summary>
        <p class="my-4 leading-relaxed text-gray-700">
            Set the <code>action</code> property to the following url: 
            <br><br><code>{code2}</code><br><br>
            where <code>&lt;username&gt;</code> is your Deta Space username (You can find it inside the url of the current page) 
            and <code>&lt;form_id&gt;</code> is a name for your form (Used to group submissions together. Allowed chars [no spaces]: a-z A-Z 0-9 - _ #).
        </p>
        <p class="leading-relaxed">
            Example:
        </p>
        <Highlight language={xml} code={code3} />
    </details>
    <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-between cursor-pointer">
            <h4 class="font-medium text-gray-900">
                3. Add form fields.
            </h4>
            <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                <svg class="absolute group-open:opacity-0 h-5 inset-0 opacity-100 w-5"fill="none"stroke="currentColor"stroke-width="2"viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap="round"stroke-linejoin="round"/></svg>
                <svg class="absolute group-open:opacity-100 h-5 inset-0 opacity-0 w-5"fill="none"stroke="currentColor"stroke-width="2"viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap="round"stroke-linejoin="round"/></svg>
            </span>
        </summary>
        <p class="my-4 leading-relaxed text-gray-700">
            Add your form fields (inputs, textareas...). Sweetforms currently supports the following input types:
        </p>
        <ul>
            <li>text</li>
            <li>number</li>
            <li>checkbox</li>
        </ul><br>
        <p class="mb-4">
            as well as textareas. It is important to add the <code>collect_</code> prefix to the <code>name</code> property of all 
            fields you want to collect on submission. Fields without this prefix will be ignored!<br>
            Also, make sure you have some <code>submit</code> type element in your form!
            <br>            
        </p>
        <p class="leading-relaxed">
            Example:
        </p>
        <Highlight language={xml} code={code4} />
    </details>
</section>
<section>
    <h2 class="mb-2">Viewing submissions</h2>
    <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-between cursor-pointer">
            <h4 class="font-medium text-gray-900">
                Viewing all submissions
            </h4>
            <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                <svg class="absolute group-open:opacity-0 h-5 inset-0 opacity-100 w-5"fill="none"stroke="currentColor"stroke-width="2"viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap="round"stroke-linejoin="round"/></svg>
                <svg class="absolute group-open:opacity-100 h-5 inset-0 opacity-0 w-5"fill="none"stroke="currentColor"stroke-width="2"viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap="round"stroke-linejoin="round"/></svg>
            </span>
        </summary>
        <p class="my-4 leading-relaxed text-gray-700">
            On the home page, you can view all submissions for all forms (Newest first). Clicking on the id of a submission
            will take you to a page with all the data collected on that submission.
        </p>
    </details>
</section>

<style lang="postcss">
    section {
        @apply mb-6;
    }
    code > code {
        @apply ml-8;
    }
    details {
        @apply py-4 px-6 my-3 bg-neutral-100 rounded-xl border-2 border-gray-200;
    }
</style>