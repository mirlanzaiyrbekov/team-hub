import { Button } from "@/shared/components/ui/button"
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/shared/components/ui/item"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/shared/components/ui/sheet"
import { ChartArea, Menu, Phone, UsersRound } from "lucide-react"
import React from "react"

export const MenuBar: React.FC = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="ml-auto tablet:hidden">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="pt-10" />
					<SheetDescription className="pt-10" />
				</SheetHeader>
				<div className="flex flex-col gap-2 px-2">
					<Item variant="outline">
						<ItemMedia variant="icon">
							<UsersRound size={20} />
						</ItemMedia>
						<ItemContent>
							<ItemTitle>Сотрудники</ItemTitle>
							<ItemDescription>
								Список сотрудников, подробная информация
							</ItemDescription>
						</ItemContent>
					</Item>
					<Item variant="outline">
						<ItemMedia variant="icon">
							<ChartArea size={20} />
						</ItemMedia>
						<ItemContent>
							<ItemTitle>Аналитика данных</ItemTitle>
							<ItemDescription>
								Подробная аналитика данных компании
							</ItemDescription>
						</ItemContent>
					</Item>
					<Item variant="outline">
						<ItemMedia variant="icon">
							<Phone size={20} />
						</ItemMedia>
						<ItemContent>
							<ItemTitle>Тех.поддержка</ItemTitle>
							<ItemDescription>
								Техническая поддержка клиентов 24/7
							</ItemDescription>
						</ItemContent>
					</Item>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button variant="outline">Закрыть</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
