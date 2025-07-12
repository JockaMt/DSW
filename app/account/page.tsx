'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';

// Tipagem para os dados do usuário (ajuste conforme a sua API)
interface UserProfile {
    id: string;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    // Adicione outros campos relevantes, como data de registro, etc.
}

// Tipagem para um pedido (ajuste conforme a sua API)
interface Order {
    id: string;
    date: string;
    total: number;
    status: string;
    items: Array<{
        productId: string;
        productName: string;
        quantity: number;
        price: number;
    }>;
}

const AccountPage: React.FC = () => {
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [userOrders, setUserOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Simulação de carregamento de dados do usuário e pedidos
    // *** Substitua isso pela sua chamada de API real! ***
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                // Simular um atraso de rede
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Dados simulados (substitua pela chamada real à sua API)
                const dummyUserProfile: UserProfile = {
                    id: 'user123',
                    name: 'João Silva',
                    email: 'joao.silva@example.com',
                    phone: '(11) 98765-4321',
                    address: 'Rua da Tecnologia, 123 - Centro, São Paulo - SP',
                };

                const dummyUserOrders: Order[] = [
                    {
                        id: 'ORD001',
                        date: '2024-06-15',
                        total: 2599.99,
                        status: 'Entregue',
                        items: [
                            { productId: 'PROD001', productName: 'Laptop Gamer XYZ', quantity: 1, price: 2599.99 },
                        ],
                    },
                    {
                        id: 'ORD002',
                        date: '2024-07-01',
                        total: 599.90,
                        status: 'Em processamento',
                        items: [
                            { productId: 'PROD002', productName: 'Teclado Mecânico RGB', quantity: 1, price: 349.90 },
                            { productId: 'PROD003', productName: 'Mouse Sem Fio Ultra', quantity: 1, price: 250.00 },
                        ],
                    },
                ];

                setUserProfile(dummyUserProfile);
                setUserOrders(dummyUserOrders);
            } catch (err) {
                setError('Erro ao carregar os dados do perfil.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfileData();
    }, []);

    // Funções auxiliares para classes de status (melhorar a legibilidade)
    const getStatusClasses = (status: string) => {
        switch (status.toLowerCase()) {
            case 'entregue':
                return 'green-500'
            case 'em processamento':
                return 'blue-500'
            case 'cancelado':
                return 'red-700'
            case 'enviado':
                return 'blue-500'
            default:
                return 'blue-500'
        }
    };

    if (isLoading) {
        return (
            <div className="container mx-auto p-6 text-center text-gray-600">
                Carregando perfil...
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto p-6 text-center text-red-600 font-bold">
                {error}
            </div>
        );
    }

    if (!userProfile) {
        return (
            <div className="container mx-auto p-6 text-center text-gray-600">
                Nenhum perfil de usuário encontrado.
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white">
            <Avatar className="flex w-24 h-24 mb-6 mx-auto rounded-full overflow-hidden">
                <AvatarImage src="https://github.com/JockaMt.png" alt='profile image' />
                <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-10 pb-4 border-b-1 border-gray-200">
                Meu Perfil
            </h1>
            <div className="flex flex-col gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className='text-2xl font-bold font-sans'>
                            Informações Pessoais
                        </CardTitle>
                        <CardDescription>
                            Aqui estão os detalhes do seu perfil. Você pode editar suas informações a qualquer momento.
                        </CardDescription>
                        <CardAction>
                            <Button
                                onClick={() => alert('Funcionalidade de edição de perfil em breve!')}
                                >
                                <FaEdit/>
                                Editar Perfil
                            </Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <Separator className='mb-5' />
                        <p>
                            <strong className="font-medium text-gray-800">Nome:</strong> {userProfile.name}
                        </p>
                        <p>
                            <strong className="font-medium text-gray-800">Email:</strong> {userProfile.email}
                        </p>
                        {userProfile.phone && (
                            <p>
                                <strong className="font-medium text-gray-800">Telefone:</strong> {userProfile.phone}
                            </p>
                        )}
                        {userProfile.address && (
                            <p>
                                <strong className="font-medium text-gray-800">Endereço:</strong> {userProfile.address}
                            </p>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className='text-2xl font-bold font-sans'>
                            Meus Pedidos
                        </CardTitle>
                        <CardDescription>
                            Aqui estão os pedidos que você fez. Você pode ver o status e detalhes de cada pedido.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Separator className='mb-5' />
                    {userOrders.length === 0 ? (
                        <p className="text-gray-600 text-lg">Você ainda não fez nenhum pedido.</p>
                    ) : (
                        <div className="space-y-6">
                            {userOrders.map(order => (
                                <div key={order.id} className="border border-gray-300 rounded-lg p-5 bg-white">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex justify-between items-center">
                                        Pedido #{order.id}{' '}
                                        <Badge className={`bg-${getStatusClasses(order.status)}`} variant="default">{order.status}</Badge>
                                    </h3>
                                    <p className="text-gray-600 mb-2">
                                        <strong className="font-medium">Data:</strong>{' '}
                                        {new Date(order.date).toLocaleDateString('pt-BR')}
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        <strong className="font-medium">Total:</strong> R$ {order.total.toFixed(2)}
                                    </p>
                                    <div className="bg-blue-50 p-4 rounded-md">
                                        <h4 className="text-lg font-semibold text-primary mb-3">Itens:</h4>
                                        <ul className="list-none p-0 m-0 space-y-2">
                                            {order.items.map(item => (
                                                <li key={item.productId} className="flex justify-between text-gray-700">
                                                    <span>
                                                        {item.quantity}x {item.productName}
                                                    </span>
                                                    <span>R$ {item.price.toFixed(2)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    </CardContent>
                </Card>
            </div>

            {/* Você pode adicionar mais seções aqui, como:
          - Endereços de entrega
          - Métodos de pagamento
          - Lista de desejos
          - Notificações
      */}
        </div >
    );
};

export default AccountPage;