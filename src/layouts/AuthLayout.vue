<template>
    <div class="grid h-full flex-1 lg:grid-cols-2">
        <div class="flex flex-col p-8">
            <RouterView v-slot="routeProps">
                <Transition name="subtle-slide-fade" mode="out-in">
                    <div
                        :key="routeProps.route.path"
                        class="sm:max-w-compact mx-auto flex w-full flex-1 flex-col justify-center"
                    >
                        <Component :is="routeProps.Component" />
                    </div>
                </Transition>
            </RouterView>
        </div>
        <div class="relative hidden bg-black lg:block">
            <img
                class="absolute h-full w-full object-cover"
                src="/src/images/login.webp"
                width="960"
                height="1080"
                alt=""
            />
        </div>
    </div>
</template>
