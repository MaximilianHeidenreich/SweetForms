
<section>
    <h3>Settings for - Default Form</h3>
    <section>
        <h4>Name</h4>
        <p class="max-w-[55ch]">
            The display name of the form (only used inside the dashboard).
        </p>
        <form class="flex items-center gap-8">
            <input type="text" name="collect_prefix" placeholder="Default Form" class="w-full flex-1"/>
            <button type="submit" class="flex-grow-0 shrink-0">Save</button>
        </form>
    </section>
    <section>
        <h4>Identifier</h4>
        <p class="max-w-[55ch]">
            A unique identifier for the form. This is used to group submissions for specific forms together
            by specifying it at the end the <code>&lt;form&gt;</code> elements <code>&lt;action&gt;</code> url.
            Allowed characters: <b>a-z A-Z 0-9 _ - # .</b>
            <br><br>
        </p>
        <p>
            <b>Example:</b><br>
            <code>
                &lt;form action=&quot;https://.../api/submit/&lt;formIdentifier&gt;&quot; method=&quot;post&quot;&gt;
                    <br>...<br>
                &lt;/form&gt;
            </code>
        </p>
        <form class="flex items-center gap-8">
            <input type="text" name="collect_prefix" placeholder="default_form" class="w-full flex-1"/>
            <button type="submit" class="flex-grow-0 shrink-0">Save</button>
        </form>
    </section>
    <section>
        <h4>Preview</h4>
        <p class="max-w-[55ch]">
            A unique identifier for the form. This is used to group submissions for specific forms together
            by specifying it at the end the <code>&lt;form&gt;</code> elements <code>&lt;action&gt;</code> url.
            Allowed characters: <b>a-z A-Z 0-9 _ - # .</b>
            <br><br>
        </p>
        <p>
            <b>Example:</b><br>
            <code>
                &lt;form action=&quot;https://.../api/submit/&lt;formIdentifier&gt;&quot; method=&quot;post&quot;&gt;
                    <br>...<br>
                &lt;/form&gt;
            </code>
        </p>
        <form class="flex items-center gap-8">
            <input type="text" name="collect_prefix" placeholder="default_form" class="w-full flex-1"/>
            <button type="submit" class="flex-grow-0 shrink-0">Save</button>
        </form>
    </section>
</section>

<section>
    <h3>General settings</h3>
    <section>
        <h4>Collect prefix</h4>
        <p class="max-w-[55ch]">
            The collect prefix is used to identify which fields of a form should be collected on submission.
            It is preppended to the name of the field.
            <br><br>
        </p>
        <p>
            <b>Example:</b><br>
            <code>
                &lt;input type=&quot;text&quot; name=&quot;collect(text)_name&quot; placeholder=&quot;Enter your name&quot; /&gt;
            </code>
        </p>
        <form class="flex items-center gap-8">
            <input type="text" name="collect_prefix" placeholder="collect" class="w-full flex-1"/>
            <button type="submit" class="flex-grow-0 shrink-0">Save</button>
        </form>
    </section>
</section>

<style lang="postcss">
    section {
        @apply mb-6;
    }
    section > section {
        @apply py-4 px-6 my-3 bg-neutral-100 rounded-xl border-2 border-gray-200;
    }
    section > section form {
        @apply mt-4;
    }
</style>
